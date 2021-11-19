from flask import Flask, render_template, request, jsonify,json,redirect
import pickle
import numpy as np
import model

pred = ""
# model = pickle.load(open('iri.pkl', 'rb'))

app = Flask(__name__)


@app.route('/')
def man():
    return render_template('frontend.html')

def convert_to_float(lst):
    result = [dict([a, float(x)] for a, x in b.items()) for b in lst]
    return result


@app.route('/predict', methods=['POST'])
def home():
    if request.method == 'POST':
        data = request.json
        # print(data[key])
        l = data['value']
          # data = convert_to_float(data)
        l1 = []
        l1.append(l)
        print(l1)
        pred = model.clf_svm_1.predict(l1)
        print(pred.tobytes())
        # return redirect('/results')
        return render_template('after.html', data=np.array_str(pred))

# @app.route('/results', methods=['GET'])
# def new_home():
#     return render_template('after.html')

if __name__ == "__main__":
    app.run(debug=True)
