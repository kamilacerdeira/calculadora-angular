//comando do typescript que torna a classe pública ao acessar esse diretório (calculadora) em outro local
//isso é usado para encurtar os nomes dos módulos e componentes no momento de importação em outro lugar
//olhar como foi importado o módulo calculadora no arquivo app.module
//no lugar de "import { CalculadoraModule } from './calculadora/calculadora.module';"
//ficou import { CalculadoraModule } from './calculadora';

export * from './calculadora.module';
export * from './components';
export * from './services';
