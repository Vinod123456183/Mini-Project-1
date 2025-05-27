import tkinter as tk
import re

# ---------------------------------------------
# Compiler Logic Functions (Backend)
# ---------------------------------------------

def lexer(input_code):
    token_pattern = r'\w+|[^\s\w]'
    return re.findall(token_pattern, input_code)

def parse_input(tokens):
    tree = []
    current_statement = []
    for token in tokens:
        current_statement.append(token)
        if token == ';':
            tree.append(current_statement)
            current_statement = []
    if current_statement:
        tree.append(current_statement)
    return tree

def semantic_analysis(parsed_tree):
    for stmt in parsed_tree:
        if '=' not in stmt:
            raise Exception(f"Semantic Error: Missing '=' in statement {stmt}")

def generate_intermediate_code(parsed_tree):
    ic = []
    for stmt in parsed_tree:
        if '=' in stmt:
            var_index = stmt.index('=')
            var = stmt[var_index - 1]
            value = stmt[var_index + 1] if var_index + 1 < len(stmt) else 'undefined'
            ic.append(f"MOV {var}, {value}")
    return ic

# ---------------------------------------------
# Function to Run Compiler
# ---------------------------------------------

def run_compiler():
    input_code = text_area.get("1.0", tk.END).strip()
    
    try:
        # Lexer
        tokens = list(lexer(input_code))
        lexer_output.config(state=tk.NORMAL)
        lexer_output.delete(1.0, tk.END)
        lexer_output.insert(tk.END, f"Tokens:\n{tokens}")
        lexer_output.config(state=tk.DISABLED)

        # Parser
        parsed_tree = parse_input(tokens)
        parser_output.config(state=tk.NORMAL)
        parser_output.delete(1.0, tk.END)
        parser_output.insert(tk.END, f"Parsed Tree:\n{parsed_tree}")
        parser_output.config(state=tk.DISABLED)

        # Semantic Analysis
        semantic_analysis(parsed_tree)
        semantic_output.config(state=tk.NORMAL)
        semantic_output.delete(1.0, tk.END)
        semantic_output.insert(tk.END, "Semantic analysis passed.")
        semantic_output.config(state=tk.DISABLED)

        # Intermediate Code Generation
        intermediate_code = generate_intermediate_code(parsed_tree)
        icg_output.config(state=tk.NORMAL)
        icg_output.delete(1.0, tk.END)
        icg_output.insert(tk.END, f"Intermediate Code:\n{intermediate_code}")
        icg_output.config(state=tk.DISABLED)

    except Exception as e:
        semantic_output.config(state=tk.NORMAL)
        semantic_output.delete(1.0, tk.END)
        semantic_output.insert(tk.END, f"Error: {str(e)}")
        semantic_output.config(state=tk.DISABLED)

# ==========================================================
# 🖼 GUI Part (Frontend using tkinter)
# ==========================================================

root = tk.Tk()
root.title("Mini Compiler")
root.geometry("600x700")  # Resize the window

# ---- Frame for Input ----
input_frame = tk.LabelFrame(root, text="Source Code", padx=10, pady=10)
input_frame.pack(fill="both", expand="yes", padx=10, pady=5)

text_area = tk.Text(input_frame, height=8, width=70, font=("Consolas", 12))
text_area.pack()

# ---- Run Button ----
run_button = tk.Button(root, text="Run Compiler", font=("Arial", 12, "bold"), bg="#4CAF50", fg="white", command=run_compiler)
run_button.pack(pady=10)

# ---- Output Frames ----
def create_output_section(title):
    frame = tk.LabelFrame(root, text=title, padx=10, pady=5)
    frame.pack(fill="both", expand="yes", padx=10, pady=5)
    text_widget = tk.Text(frame, height=5, width=70, wrap=tk.WORD, font=("Consolas", 11), state=tk.DISABLED, bg="#f7f7f7")
    text_widget.pack()
    return text_widget

lexer_output = create_output_section("Lexer Output (Tokens)")
parser_output = create_output_section("Parser Output (Parse Tree)")
semantic_output = create_output_section("Semantic Analysis")
icg_output = create_output_section("Intermediate Code Generation")

# ---- Start GUI Loop ----
root.mainloop()
