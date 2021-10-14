from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy
import os

api = Flask(__name__)
db = SQLAlchemy(api)
api.secret_key = "fdkjfkjsdkljkf"
api.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg','tiff'}
api.config['UPLOAD_FOLDER'] = "../public/Pfps"
class Users(db.Model):
    _id = db.Column(db.Integer,primary_key=True)
    UserName = db.Column(db.String(50),nullable=False)
    email = db.Column(db.String(150),nullable=False,unique=True)
    password = db.Column(db.String(30),nullable=False)
    Pfp_path = db.Column(db.String(320),nullable=False)
    isVerified = db.Column(db.Boolean(),default=False)


@api.route("/create_account",methods=["GET","POST"])
def create_account():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password1']
    conPassword = request.form['password2']
    try:
        pfp = request.files['pfp']
        pfp.save(os.path.join(api.config['UPLOAD_FOLDER'], pfp.filename))
        path = f"../public/Pfps/{pfp.filename}"
    except Exception:
        path = "../public/Pfps/default.jpg"

    found_mail = Users.query.filter_by(email=email).first()
    if found_mail:
        return {"Error":"This email is used"},403
    if password != conPassword:
        return {"Error":"Make sure that both of password fields are the same"}
    newUser = Users(UserName=name,email=email,password=password,Pfp_path=path,isVerified=False)
    db.session.add(newUser)
    db.session.commit()


    return {"Done":"Account Created succsessfully"},200


if __name__ == "__main__":
    api.run(debug=True)
