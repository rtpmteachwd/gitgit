from PIL import Image
from flask import Flask, request, render_template
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def convert_to_desired_format(image, output_format):
    image_name, image_extension = os.path.splitext(image.filename)
    image_name = image_name + '.' + output_format
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], image_name)
    img = Image.open(image)
    img.save(image_path)
    return image_name

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'files[]' not in request.files:
            return render_template('index.html', message='No file part')
        files = request.files.getlist('files[]')
        output_format = request.form['output_format']
        if output_format not in ALLOWED_EXTENSIONS:
            return render_template('index.html', message='Invalid output format')

        for file in files:
            if file.filename == '':
                return render_template('index.html', message='No selected file')
            if file and allowed_file(file.filename):
                filename = convert_to_desired_format(file, output_format)
                return render_template('index.html', message='Files converted successfully!', filename=filename)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
