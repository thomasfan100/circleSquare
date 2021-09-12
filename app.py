import random;
import webbrowser;
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/newSkill/')
def newSkill():
    sites = [
        "https://www.chess.com/learn-how-to-play-chess", 
        "https://www.delicious.com.au/recipes/collections/gallery/60-healthy-dinners-you-can-cook-in-30-minutes/1vo4q819", 
        "https://www.wordstream.com/blog/ws/2019/12/31/basic-website",
        "https://musescore.com/",
        "https://www.pagat.com/"]

    randomNumber = random.randint(0, 4)
    rand = sites[randomNumber]
    webbrowser.open(rand)
    return render_template('index.html')

@app.route('/toDo/')
def toDo():
    return render_template('toDo.html')
    
@app.route('/music/')
def music():
    return render_template('music.html')


if __name__ == '__main__':
    app.run(debug=True)