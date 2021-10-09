from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
db = SQLAlchemy(api)
api.secret_key = "fdkjfkjsdkljkf"
api.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'

class Users(db.Model):
    _id = db.Column(db.Integer,primary_key=True)
    UserName = db.Column(db.String(50),nullable=False)
    email = db.Column(db.String(150),nullable=False,unique=True)
    password = db.Column(db.String(30),nullable=False)
    Pfp_path = db.Column(db.String(320),nullable=False)



@api.route("/create_account",methods=["GET","POST"])
def create_account():
    data = request.get_json(force=True)
    print(data)
    return {"it worked":"word"}



if __name__ == "__main__":
    api.run(debug=True)
