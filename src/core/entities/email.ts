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

public getBody(): string {return `<!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="margin:0;padding:0;background:#f5f3ff;font-family:Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;"><tr><td align="center"><table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;border:2px solid #c4b5fd;overflow:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.08);"><tr><td style="background:#6d28d9;padding:25px;text-align:center;color:#ffffff;font-size:20px;font-weight:bold;">💌 Uma novidade pra você</td></tr><tr><td style="padding:35px;color:#333;text-align:center;"><div style="background:#8b5cf6;padding:16px;border-radius:8px;color:#fff;font-size:18px;font-weight:bold;margin-bottom:25px;">🎉 Geovanna aceitou o convite!</div><p style="font-size:15px;line-height:1.6;color:#555;margin-bottom:20px;">Parece que alguém disse “sim” por aí... 💖</p><p style="font-size:14px;color:#777;">Tomara que isso te faça sorrir 😊</p></td></tr><tr><td style="background:#ede9fe;text-align:center;padding:15px;font-size:12px;color:#6b7280;">© ${new Date().getFullYear()} - Feito com carinho 💜</td></tr></table></td></tr></table></body></html>`;}
}
