import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import * as dotenv from 'dotenv'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { join } from 'path';

dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}cluster0.t49xt.mongodb.net/${process.env.DB_NAME}`,
    ),
    UsersModule,
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
