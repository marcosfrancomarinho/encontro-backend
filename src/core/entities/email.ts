export class Email {
  public constructor(
    private to: string,
    private subject: string,
  ) {}

  public getTo(): string {
    return this.to;
  }

  public getSubject(): string {
    return this.subject;
  }

  public getBody(): string {
  return `<!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${this.subject}</title></head><body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:20px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.1);"><tr><td style="background:#4f46e5;color:#ffffff;padding:20px;text-align:center;"><h1 style="margin:0;font-size:24px;">${this.subject}</h1></td></tr><tr><td style="padding:30px;color:#333;"><p style="margin:0 0 15px;">Olá,</p><p style="margin:0 0 20px;font-size:16px;line-height:1.5;">🎉 <strong>Geovana aceitou o convite!</strong></p><p style="margin:0 0 20px;font-size:14px;color:#555;">Agora você já pode continuar com os próximos passos normalmente.</p><div style="text-align:center;margin:30px 0;"><a href="#" style="background:#4f46e5;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;font-size:14px;display:inline-block;">Ver detalhes</a></div><p style="margin:0;font-size:14px;color:#777;">Atenciosamente,<br><strong>Equipe de Notificações</strong></p></td></tr><tr><td style="background:#f9fafb;padding:15px;text-align:center;font-size:12px;color:#999;">© ${new Date().getFullYear()} - Todos os direitos reservados</td></tr></table></td></tr></table></body></html>`;
}
}
