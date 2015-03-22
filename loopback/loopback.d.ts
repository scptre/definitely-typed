/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module loopback {

    interface ILoopBackAuth {
        accessTokenId:string;
        currentUserId:string;
    }

    interface IEntity {
    }

    interface IPersistenceModel {
        find(options?:loopback.IQuery): Array<loopback.IEntity>
        findById(options?:loopback.IQuery, success?:any, error?:any): loopback.IEntity
        findByAccessToken(accessToken:string, success?:any, error?:any): loopback.IEntity
        create(data:any, success?:any, error?:any): loopback.IEntity
    }

    interface IQuery {
    }

    interface IUser extends IPersistenceModel {
        login(credentials:any, success?:any, error?:any) : loopback.IEntity
        logout(success?:any, error?:any) : loopback.IEntity
    }

    interface IWhoAmI extends IPersistenceModel {
        whoAmI(success?:any, error?:any): loopback.IEntity
    }

    interface IApp {
        models:Array<IModel>
    }

    interface IEntity {
    }

    interface IPersistenceEntity extends IEntity {
        id:string;
    }

    interface IEmail extends IEntity {
        from:string;
        to:string;
        subject:string;
        text:string;
        html?:string;
    }

    interface IModel {
    }

    interface IPersistenceModel extends IModel {
        find(options?:loopback.IQuery, callback?:any): Promise<any>
        findById(id:any, callback?:any): Promise<any>
        findOne(filter:loopback.IQuery, callback?:any): Promise<any>
        create(data:any, success?:any, error?:any): loopback.IEntity
    }

    interface IEmailModel {
        send(email:IEmail, callback?:any) : Promise<any>
    }

    interface IQuery {
    }

    interface IUser extends IPersistenceEntity {
        email:string;
    }

    interface IUserModel extends IPersistenceModel {
        login(credentials:any, success?:any, error?:any) : loopback.IEntity
        logout(success?:any, error?:any) : loopback.IEntity
    }
}

