from flask import Flask, render_template, request, redirect, url_for, session
import json

app = Flask(__name__)
app.secret_key = "your_secret_key"

# Load users from a JSON file
with open("users.json", "r") as f:
    users = json.load(f)

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if username in users and users[username]["password"] == password:
            session["username"] = username
            return redirect(url_for("secured_page"))
        else:
            error_message = "Invalid username or password"
            return render_template("login.html", error_message=error_message)

    return render_template("login.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if username in users:
            error_message = "Username already exists"
        else:
            users[username] = {"password": password}
            with open("users.json", "w") as f:
                json.dump(users, f)
            return redirect(url_for("login"))

    return render_template("register.html", error_message=error_message if "error_message" in locals() else None)


@app.route("/secured_page")
def secured_page():
    if "username" in session:
        return render_template("secured_page.html")
    else:
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)
