import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { clienteProviders } from './cliente.providers';
import { ClienteController } from './controllers/cliente.controller';
import { ClienteService } from './servicies/cliente.service';

@Module({
  controllers: [ClienteController],
  imports:[DatabaseModule],
  providers: [...clienteProviders,ClienteService]
})
export class ClienteModule {}
