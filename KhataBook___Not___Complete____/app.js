const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Corrected static path

const hisaabDir = './hisaab';

// Ensure 'hisaab/' directory exists before performing any file operations
if (!fs.existsSync(hisaabDir)) {
    fs.mkdirSync(hisaabDir);
}

// Home Route - Display all Hisaab
app.get('/', (req, res) => {
    fs.readdir(hisaabDir, (error, files) => {
        if (error) {
            console.error("Error reading directory:", error);
            return res.status(500).send("Internal Server Error");
        }

        if (!files || files.length === 0) { // Handle empty folder
            return res.render('index', { files: [] });
        }

        const fileData = files.map(file => {
            const filePath = path.join(hisaabDir, file);
            const stats = fs.statSync(filePath);
            const createdAt = new Date(stats.birthtime);
            const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
            return { name: file, date: formattedDate };
        });

        res.render('index', { files: fileData });
    });
});

// Create New Hisaab
app.get('/create', (req, res) => {
    res.render('create');
});
app.post('/createhisaab', (req, res) => {
    const fileName = `${req.body.title}.txt`; // Ensure file has a .txt extension

    fs.writeFile(path.join(hisaabDir, fileName), req.body.content, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});


// Edit Hisaab
app.get('/edit/:filename', (req, res) => {
    // console.log(hisaabDir);
    fs.readFile(path.join(hisaabDir, req.params.filename), 'utf-8', (err, filedata) => {
        if (err) return res.status(500).send(err);
        res.render('edit', { filedata, filename: req.params.filename });
    });
});

app.post('/update/:filename', (req, res) => {
    fs.writeFile(path.join(hisaabDir, req.params.filename), req.body.content, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});





// View Individual Hisaab
app.get('/hisaab/:filename', (req, res) => {
    fs.readFile(path.join(hisaabDir, req.params.filename), 'utf-8', (err, filedata) => {
        if (err) return res.status(500).send(err);
        res.render('hisaab', { filedata, filename: req.params.filename });
    });
});





// Delete Hisaab
app.get('/delete/:filename', (req, res) => {
    fs.unlink(path.join(hisaabDir, req.params.filename), (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});






app.listen(3000, () => console.log("Server running on port 3000"));
