from os import path
from pathlib import Path

from flask import Flask, render_template
from flask_frozen import Freezer


template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)
#app.config['FREEZER_BASE_URL'] = environ.get('CI_PAGES_URL')
app.config['FREEZER_DESTINATION'] = 'public'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
freezer = Freezer(app)

@app.cli.command()
def freeze():
    freezer.freeze()

@app.cli.command()
def serve():
    freezer.run()


# Home
@app.route('/')
def home():
    return render_template('pages/home.html')

# Team
# Teammember
@app.route("/teammember")
def teammember():
    return render_template("pages/teammember.html")

# Attributions
@app.route("/attributions")
def attributions():
    return render_template("pages/attributions.html")

# Collaborations
# Team
@app.route("/collaborations")
def collaborations():
    return render_template("pages/collaborations.html")



# Project
# Project Description
@app.route("/projectdescription")
def projectdescription_view():
    return render_template("pages/projectdescription.html")

# Engineering
@app.route("/engineering")
def engineering():
    return render_template("pages/engineering.html")

# Contribution
@app.route("/contribution")
def contribution():
    return render_template("pages/contribution.html")

# Safety-Project
@app.route("/safetyproject")
def safetyproject():
    return render_template("pages/safetyproject.html")



# Lab
# Design
@app.route("/design")
def design():
    return render_template("pages/design.html")

# Experiments
@app.route("/experiments")
def experiments():
    return render_template("pages/experiments.html")

# Notebook
@app.route("/notebook")
def notebook():
    return render_template("pages/notebook.html")

# Results
@app.route("/results")
def results():
    return render_template("pages/results.html")

# Model
@app.route("/model")
def model():
    return render_template("pages/model.html")

# Hardware
@app.route("/hardware")
def hardware():
    return render_template("pages/hardware.html")

# Software
@app.route("/software")
def software():
    return render_template("pages/software.html")

# Human Practice
# Practical Content
@app.route("/practicalcontent")
def practicalcontent():
    return render_template("pages/practicalcontent.html")

# Education
@app.route("/education")
def education():
    return render_template("pages/education.html")

# Safety
@app.route("/safetyhuman")
def safetyhuman():
    return render_template("pages/safetyhuman.html")

# Inclusivity
@app.route("/inclusivity")
def inclusivity():
    return render_template("pages/inclusivity.html")

# Sustainability
@app.route("/sustainability")
def sustainability():
    return render_template("pages/sustainability.html")


@app.route('/<page>')
def pages(page):
    return render_template(str(Path('pages')) + '/' + page.lower() + '.html')

# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    # Add port 8080
    app.run(debug=True, use_reloader=True, port=8080) 
