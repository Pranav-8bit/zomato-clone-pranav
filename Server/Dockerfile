FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./

ENV MONGO_URI=mongodb+srv://tpranav15:SaChIn%40100@cluster0.e34lmqg.mongodb.net/?retryWrites=true&w=majority
ENV JWTSECRET=ZomatoApp
ENV AWS_S3_ACCESS_KEY=AKIA26K3Z5F2XQU637MI
ENV AWS_S3_SECRET_KEY=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
ENV GOOGLE_CLIENT_ID=579432658480-uvk9h1akqj3lag3d2acijupj9n4u74tp.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

RUN npm run build

CMD [ "npm", "run", "start" ]