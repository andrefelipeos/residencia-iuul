export class Consulta {
  constructor(
    readonly cpfDoPaciente: string,
    readonly data: Date,
    readonly horaInicial: string,
    readonly horaFinal: string
  ) {}
}

