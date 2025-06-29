// Importación del Middleware
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtMiddleware } from './core/guards/middleware/jwt.middleware';

// Para conectar el nuevo modulo se debe importar 
import { ConexionDB } from './config/database/database.module';

// Importación de los Modulos que se van a conectar a esta colección
import { UsersModule } from './modules/users/users.module';
import { CostumerModule } from './modules/costumer/costumer.module';
import { DiagnoseModule } from './modules/diagnose/diagnose.module';
import { DiagnoseReportModule } from './report/diagnose-report/diagnose-report.module';
import { CostumerReportModule } from './report/costumer-report/costumer-report.module';
import { AuthModule } from './modules/auth/auth.module';

// Importacion del controlador Principal App_Module
import { AppController } from './app.controller';

@Module({
  imports: [ 
    ConexionDB, 
    UsersModule, 
    CostumerModule, 
    DiagnoseModule, 
    DiagnoseReportModule, 
    CostumerReportModule, 
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  // Para activar el middleware en Nest
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(JwtMiddleware)
    .forRoutes(
      { path: 'API/V1/users/get', method: RequestMethod.GET },
      { path: 'API/V1/users/:id', method: RequestMethod.DELETE },
      { path: 'API/V1/users/:id', method: RequestMethod.PATCH },
      { path: 'API/V1/costumer/get', method: RequestMethod.POST },
      { path: 'API/V1/costumer/add', method: RequestMethod.POST },
      { path: 'API/V1/costumer/report', method: RequestMethod.ALL },
      { path: 'API/V1/costumer/:id', method: RequestMethod.DELETE },
      { path: 'API/V1/costumer/:id', method: RequestMethod.PATCH },
      { path: 'API/V1/diagnose/get', method: RequestMethod.POST },
      { path: 'API/V1/diagnose/add', method: RequestMethod.POST },
      { path: 'API/V1/diagnose/report', method: RequestMethod.ALL },
      { path: 'API/V1/diagnose/:id', method: RequestMethod.DELETE },
      { path: 'API/V1/diagnose/:id', method: RequestMethod.PATCH },
    );
  };
};