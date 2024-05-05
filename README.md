# EaseRecipes

# Frontend
+ Naviagte to the project directory 
+ Install the following packages
yarn install
yarn add @types/react-router-dom
yarn add infinite-react-carousel
yarn add react-sticky

+ Build and run
set NODE_OPTIONS=--openssl-legacy-provider
yarn start


# Backend
+ Nagivate to api directory of the project

+ Create your own venv and activate it
python -m venv .venv
.venv\Scripts\activate

+ Install the requirements
pip install -r requirements.txt
pip install torch==2.0.1 torchvision --index-url https://download.pytorch.org/whl/cu118

+ Run the app 
flask run --no-debugger
