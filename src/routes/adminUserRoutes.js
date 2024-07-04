const adminUserRouter = require("express").Router();
const {disableUserById,
    disableUserByEmail,
    viewAllUsers,
    viewAllDisabledUsers,
    createAdminUser,
    activateUserByEmail,
    activateUserById,
    viewAllOrders,
    emailAllRegisteredUsers,
    addAdminRoleToExistingUser,
    makeAdmin
} = require('../handlers/adminDashboard/userAdminHandler');

const isAuthenticated = require('../middlewares/loginRequire');
const isAdmin = require('../middlewares/isAdmin');

adminUserRouter.use(isAuthenticated);
adminUserRouter.use(isAdmin);

adminUserRouter
    .put('/disableuserbyid', disableUserById)
    .put('/disableuserbyemail', disableUserByEmail)
    .put('/activateuserbyid', activateUserById)
    .put('/activateuserbyemail', activateUserByEmail)
    .get('/allusers', viewAllUsers)
    .get('/alldisabledusers', viewAllDisabledUsers)
    .get('/view-all-orders', viewAllOrders)
    .post('/createadminuser', createAdminUser)
    .post("/upgradeUser", addAdminRoleToExistingUser)
    .post('/email-all-users', emailAllRegisteredUsers)
    .post("/createAdminForce", makeAdmin)

module.exports = adminUserRouter;
