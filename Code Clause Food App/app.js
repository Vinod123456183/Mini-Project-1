const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const recipesDir = path.join(__dirname, "recipes");

if (!fs.existsSync(recipesDir)) {
  fs.mkdirSync(recipesDir);
}

app.get("/", (req, res) => {
  res.render("mainPage");
});

app.get("/recipies", (req, res) => {
  fs.readdir(recipesDir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).send("Error loading recipes");
    }

    const recipes = [];

    files.forEach((file) => {
      const filePath = path.join(recipesDir, file);
      const content = fs.readFileSync(filePath, "utf-8");

      const lines = content.split("\n").map((line) => line.trim());
      const recipe = {
        name: lines[1]?.replace("Recipe Name: ", "") || "Unknown",
        imageUrl:
          lines[2]?.replace("Image URL: ", "") ||
          "https://via.placeholder.com/150",
        duration: lines[3]?.replace("Duration: ", "") || "N/A",
        calories: lines[4]?.replace("Calories: ", "") || "N/A",
      };
      recipes.push(recipe);
    });

    res.render("recipies", { recipes });
  });
});

app.get("/add", (req, res) => {
  res.render("addRecipie");
});

app.post("/add-recipe", (req, res) => {
  const { name, imageUrl, duration, calories, ingredients } = req.body;

  const recipeData = `
            Recipe Name: ${name}
            Image URL: ${imageUrl}
            Duration: ${duration} minutes
            Calories: ${calories}
            Ingredients: ${ingredients}
                `;

  const fileName = `${name.replace(/\s+/g, "_")}.txt`;
  const filePath = path.join(recipesDir, fileName);

  fs.writeFile(filePath, recipeData, (err) => {
    if (err) {
      console.error("Error In Creating File: ", err);
      return res.status(500).send("Error saving recipe");
    }
    console.log(`Recipe saved as ${fileName}`);
    res.redirect("/recipies");
  });
});

app.get("/delete-recipe", (req, res) => {
  const { name } = req.query;
  const fileName = `${name.replace(/\s+/g, "_")}.txt`;
  const filePath = path.join(recipesDir, fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      return res.status(500).send("Error deleting recipe");
    }
    console.log(`Recipe deleted: ${fileName}`);
    res.redirect("/recipies");
  });
});

app.get("/details", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send("Recipe name is required");
  }

  const fileName = `${name.replace(/\s+/g, "_")}.txt`;
  const filePath = path.join(recipesDir, fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Recipe not found");
  }

  const content = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim());

  const recipe = {
    name: content[1]?.replace("Recipe Name: ", "") || "Unknown",
    imageUrl:
      content[2]?.replace("Image URL: ", "") ||
      "https://via.placeholder.com/150",
    duration: content[3]?.replace("Duration: ", "") || "N/A",
    calories: content[4]?.replace("Calories: ", "") || "N/A",
    ingredients: content.slice(5).join(", ") || "No ingredients listed",
  };

  res.render("details", { recipe });
});

app.get("/edit", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send("Recipe name is required");
  }

  const fileName = `${name.replace(/\s+/g, "_")}.txt`;
  const filePath = path.join(recipesDir, fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Recipe not found");
  }

  const content = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim());

  const recipe = {
    name: content[1]?.replace("Recipe Name: ", "").trim() || "",
    imageUrl: content[2]?.replace("Image URL: ", "").trim() || "",
    duration:
      content[3]?.replace("Duration: ", "").replace("minutes", "").trim() ||
      "0",
    calories: content[4]?.replace("Calories: ", "").trim() || "0",
    ingredients:
      content.slice(5).join(", ").replace("Ingredients: ", "").trim() || "",
  };

  res.render("edit", { recipe });
});

app.post("/update-recipe", (req, res) => {
  const { oldName, name, imageUrl, duration, calories, ingredients } = req.body;

  const oldFileName = `${oldName.replace(/\s+/g, "_")}.txt`;
  const newFileName = `${name.replace(/\s+/g, "_")}.txt`;

  const oldFilePath = path.join(recipesDir, oldFileName);
  const newFilePath = path.join(recipesDir, newFileName);

  if (!fs.existsSync(oldFilePath)) {
    return res.status(404).send("Recipe not found");
  }

  const updatedRecipeData = `
            Recipe Name: ${name}
            Image URL: ${imageUrl}
            Duration: ${duration} minutes
            Calories: ${calories}
            Ingredients: ${ingredients}
        `;

  // If name changed, rename the file
  if (oldFileName !== newFileName) {
    fs.renameSync(oldFilePath, newFilePath);
  }

  // Write the updated content to the file
  fs.writeFile(newFilePath, updatedRecipeData, (err) => {
    if (err) {
      console.error("Error updating file:", err);
      return res.status(500).send("Error updating recipe");
    }
    console.log(`Recipe updated: ${newFileName}`);
    res.redirect(`/details?name=${name}`);
  });
});

app.listen(3000);
