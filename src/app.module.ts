import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller'; // hinzufügen ✅

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController], // hinzufügen ✅
})
export class AppModule {}
