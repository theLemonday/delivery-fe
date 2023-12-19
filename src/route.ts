export enum RoutePath {
    Home = "/",
    Login = "/login",
    Account = "/account",
    AccountList = `${Account}/list`,
    AccountCreate = `${Account}/create`,
    AccountEdit = "/account/edit",
    AccountDelete = "/account/delete",
    AccountView = "/account/view",
    AccountChangePassword = "/account/change-password",
    AccountChangePasswordSuccess = "/account/change-password/success",
    AccountChangePasswordFailure = "/account/change-password/failure",
    AccountResetPassword = "/account/reset-password",
    AccountResetPasswordSuccess = "/account/reset-password/success",
    AccountResetPasswordFailure = "/account/reset-password/failure",
    AccountResetPasswordToken = "/account/reset-password/:token",
    AccountResetPasswordTokenSuccess = "/account/reset-password/:token/success",
    AccountResetPasswordTokenFailure = "/account/reset-password/:token/failure",
    AccountActivate = "/account/activate",
    AccountActivateSuccess = "/account/activate/success",
    AccountActivateFailure = "/account/activate/failure",
    AccountActivateToken = "/account/activate/:token",
    AccountActivateTokenSuccess = "/account/activate/:token/success",
    AccountActivateTokenFailure = "/account/activate/:token/failure",
    AccountDeactivate = "/account/deactivate",
    AccountDeactivateSuccess = "/account/deactivate/success",
    AccountDeactivateFailure = "/account/deactivate/failure",
    AccountDeactivateToken = "/account/deactivate/:token",
    AccountDeactivateTokenSuccess = "/account/deactivate/:token/success",
    AccountDeactivateTokenFailure = "/account/deactivate/:token/failure",
    AccountDeleteSuccess = "/account/delete/success",
    AccountDeleteFailure = "/account/delete/failure",
    AccountEditSuccess = "/account/edit/success",
    AccountEditFailure = "/account/edit/failure",
    AccountCreateSuccess = "/account/create/success",
    AccountCreateFailure = "/account/create/failure",
    AccountViewSuccess = "/account/view/success",
    AccountViewFailure = "/account/view/failure",
    AccountListSuccess = "/account/list/success",
    AccountListFailure = "/account/list/failure",
    AccountChangePasswordToken = "/account/change-password/:token",
    AccountChangePasswordTokenSuccess = "/account/change-password/:token/success",
    AccountChangePasswordTokenFailure = "/account/change-password/:token/failure",
    AccountChangePasswordTokenReset = "/account/change-password/:token/reset",
}