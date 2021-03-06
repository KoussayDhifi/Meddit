from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token,JWTManager
import os
from datetime import date

api = Flask(__name__)
jwt = JWTManager(api)
db = SQLAlchemy(api)
api.secret_key = "fdkjfkjsdkljkf"
api.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db2.sqlite3'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg','tiff'}
api.config['UPLOAD_FOLDER'] = "../public/Pfps"

port = 465


class Users(db.Model):
    _id = db.Column(db.Integer,primary_key=True)
    UserName = db.Column(db.String(50),nullable=False)
    email = db.Column(db.String(150),nullable=False,unique=True)
    password = db.Column(db.String(30),nullable=False)
    Pfp_path = db.Column(db.String(320),nullable=False)
    date = db.Column(db.String(11),nullable=False)
    isVerified = db.Column(db.Boolean(),default=False)


@api.route("/create_account",methods=["GET","POST"])
def create_account():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password1']
    conPassword = request.form['password2']
    date1 = request.form["date"]
    year = date1[0:4]
    month = date1 [5:7]
    day = date1[8::]
    month = int(month)
    year = int(year)
    day = int(day)
    current = date.today()
    cm = current.month
    cy = current.year
    cd = current.day
    age = cy-year

    if (month>=cm) and (day>=cd):
        age-=1
    if age<13:
        return {"Done":"You should be at leas 13 Years to use this website :)"}



    try:
        pfp = request.files['pfp']
        pfp.save(os.path.join(api.config['UPLOAD_FOLDER'], pfp.filename))
        path = f"/Pfps/{pfp.filename}"
    except Exception:
        path = "/Pfps/default.jpg"

    found_mail = Users.query.filter_by(email=email).first()
    if found_mail:
        return {"Done":"This email is used"},409
    if password != conPassword:
        return {"Done":"Make sure that both of password fields are the same"}
    newUser = Users(UserName=name,email=email,password=password,Pfp_path=path,date=date1,isVerified=False)
    db.session.add(newUser)
    db.session.commit()


    return {"Done":"Account Created succsessfully"},200

@api.route("/login",methods=["GET","POST"])
def login():
    
    data = request.get_json(force=True)
    email = data["email"]
    password = data["password"]
    remember = data["remember"]
    found_email = Users.query.filter_by(email=email).first()
    if (found_email):
        if (password == found_email.password):
            access_token = create_access_token(identity=email)
            print(found_email.Pfp_path)
            return {"access_token":access_token,"name":found_email.UserName,"pfp":found_email.Pfp_path,"isVerified":found_email.isVerified}
        else:
            return {"Done":"Password is wrong"},401
    else:
        return {"Done":"Email is wrong"},401
    

    return {"Haha":"Yes"}






if __name__ == "__main__":
    api.run(debug=True)
