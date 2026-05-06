from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory('static/images', filename)

@app.route('/videos/<filename>')
def serve_video(filename):
    return send_from_directory('static/videos', filename)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
