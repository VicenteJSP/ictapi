import mongoose from "mongoose";

const USER_DB = process.env.USER_DB || 'root';
const PASSWORD_DB = process.env.PASSWORD_DB || 'root';
const HOST_DB = process.env.HOST_DB || 'localhost';
const PORT_DB = process.env.PORT_DB || '27017';
const SRV_DB = null;
const DATA_MONGO = process.env.DATA_MONGO || null;

const getConnectionString = () => {
    let response = `mongodb${SRV_DB ? '+srv' : ''}://`;
    response = USER_DB ? `${response}${USER_DB}:${PASSWORD_DB}@` : response;
    response = `${response}${HOST_DB}${PORT_DB ? `:${PORT_DB}` : ''}`;
    return response;
};

const main = async () => {
    await mongoose.connect(DATA_MONGO ? DATA_MONGO : getConnectionString());
    console.log('Connection Success!');
};

const init = () => {
    main().catch(err => console.log(err));
}

export { init };