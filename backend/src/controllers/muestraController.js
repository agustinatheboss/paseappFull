const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
const USERS_PATH = path.resolve(__dirname, "./users.json");

const getUsersFromFile = () => {
  const users = readFileSync(USERS_PATH, "utf-8");
  return JSON.parse(users);
};

const addUserToFile = (user) => {
  const { users } = getUsersFromFile();
  const usersWithNewUser = [...users, user];
  try {
    writeFileSync(
      USERS_PATH,
      JSON.stringify({ users: usersWithNewUser }),
      "utf8"
    );
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }
};

const updateUserInFile = (userToUpdate) => {
  const { users } = getUsersFromFile();
  const modifiedUsers = users.map((user) =>
    user.id === userToUpdate.id ? userToUpdate : user
  );

  try {
    writeFileSync(USERS_PATH, JSON.stringify({ users: modifiedUsers }), "utf8");
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }
};

const deleteUserInFileByID = (userID) => {
  const { users } = getUsersFromFile();
  const modifiedUsers = users.filter((user) => user.id !== userID);

  try {
    writeFileSync(USERS_PATH, JSON.stringify({ users: modifiedUsers }), "utf8");
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }
};

module.exports = {
  getUsersFromFile,
  addUserToFile,
  updateUserInFile,
  deleteUserInFileByID,
};
