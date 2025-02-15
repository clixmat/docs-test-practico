# Patrones de diseno para compartir logica y estados

Para mejorar la reutilización de componentes en Angular, podemos usar varios patrones que facilitan compartir lógica similar entre componentes. Aquí te dejo algunas opciones comunes con ejemplos prácticos de cómo podrían aplicarse:

## 1. Servicios Compartidos (Service Pattern)
Justificación: El patrón de servicio es excelente para compartir lógica y estado entre componentes sin necesidad de duplicar código. Los servicios se pueden inyectar en múltiples componentes, manteniendo la lógica centralizada.

Ejemplo: Si tienes una lógica común para manejar la autenticación, puedes crear un servicio AuthService que maneje el inicio de sesión, la verificación de sesión, y el manejo de tokens. Este servicio puede ser inyectado en cualquier componente que necesite esta funcionalidad.

```javascript
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post('/api/login', credentials);
  }

  logout() {
    return this.http.post('/api/logout', {});
  }
}
```

Luego, podemos inyectar este servicio en los componentes correspondientes.

```javascript
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onLogin(credentials: any) {
    this.authService.login(credentials).subscribe(response => {
      console.log('Logged in successfully');
    });
  }
}
```

## 2. Directivas (Directive Pattern)
Justificación: Las directivas permiten encapsular comportamientos específicos que pueden aplicarse a múltiples elementos en varias partes de la aplicación. Son perfectas para reutilizar lógica visual o de interacción.

Ejemplo: Si necesitas resaltar texto en varios componentes, puedes crear una directiva HighlightDirective que pueda ser aplicada a cualquier elemento HTML.

```javascript
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

Entonces, simplemente aplicamos la directiva a cualquier elemento en tu componente:

```javascript
<div appHighlight>
  Hover over me to highlight!
</div>
```