from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
    
@app.route('/music/')
def music():
    return render_template('music.html')

@app.route('/newSkill/')
def newSkill():
    return render_template('newSkill.html')

if __name__ == '__main__':
    app.run(debug=True)