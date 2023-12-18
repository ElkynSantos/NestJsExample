import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './Common/filters/http.exception.filters';
import { TimeoutInterceptor } from './Common/interceptor/timeout.interceptor';

async function bootstrap() {

 

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeoutInterceptor())
  await app.listen(3000);
}
bootstrap();
