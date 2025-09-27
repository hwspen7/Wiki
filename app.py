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

@app.route('/')
def home():
    return render_template('pages/home.html')

# Templete
@app.route("/members")
def members():
    return render_template("pages/members.html")

# Hardware
@app.route("/hardware")
def hardware():
    return render_template("pages/hardware.html")

@app.route('/<page>')
def pages(page):
    return render_template(str(Path('pages')) + '/' + page.lower() + '.html')

# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    # Add port 8080
    app.run(debug=True, use_reloader=True, port=8080) 
