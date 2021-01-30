
# A very simple Flask Hello World app for you to get started with...
import os
from flask import Flask, request, jsonify
import glob
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity



app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello from Flask!'

@app.route('/answers')
def answers():
    txtfiles = []
    for file in glob.glob("*.json"):
        if(file != "report.json"):
            txtfiles.append(file)
    
    answers = {}
    for file in txtfiles:
        with open(file) as f:
            data = json.load(f)
            filename, _ = file.split(".")
            answers[filename] = data
    
    print(answers)
    return answers


@app.route("/submit/<email>", methods=['POST'])
def submit(email):
    if(email):
        
        with open('{}.json'.format(email), 'w') as f:
            json.dump(request.get_json(), f)
        return "DONE"

@app.route('/diff/<ques>')
def diff(ques):
    student_files = [doc for doc in os.listdir(os.getcwd()) if doc.endswith('.json')]
    student_notes =[json.load(open(File))[ques] for File in  student_files]
    print(student_notes)
    if(student_notes):
        vectorize = lambda Text: TfidfVectorizer().fit_transform(Text).toarray()
        similarity = lambda doc1, doc2: cosine_similarity([doc1, doc2])
        vectors = vectorize(student_notes)
        s_vectors = list(zip(student_files, vectors))
        def check_plagiarism():
            plagiarism_results = set()
            for student_a, text_vector_a in s_vectors:
                new_vectors =s_vectors[:]
                current_index = new_vectors.index((student_a, text_vector_a))
                del new_vectors[current_index]
                for student_b , text_vector_b in new_vectors:
                    sim_score = similarity(text_vector_a, text_vector_b)[0][1]
                    student_pair = sorted((student_a, student_b))
                    score = (student_pair[0], student_pair[1],sim_score)
                    plagiarism_results.add(score)
            return plagiarism_results
    
    
        l = []
        for data in check_plagiarism():
            l.append(data)
            
        return jsonify(l)
    else:
        return "No Files present"


# @app.errorhandler(Exception)
# def all_exception_handler(error):
#     return "Invalid"


if __name__ == "__main__":
    app.run()