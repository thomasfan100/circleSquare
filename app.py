from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/newSkill/')
def newSkill():
    return render_template('newSkill.html')

@app.route('/toDo/')
def toDo():
    return render_template('toDo.html')
    
@app.route('/music/')
def music():
    return render_template('music.html')

if __name__ == '__main__':
    app.run(debug=True)