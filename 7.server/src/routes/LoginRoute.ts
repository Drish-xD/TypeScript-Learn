import { Router, type NextFunction, type Request, type Response } from 'express';
import { RequestWithBody } from '../types';

const router = Router();

// middleware function for protecting routes
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session!.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('User not permitted, please login!');
}

// home route
router.get('/', (req: RequestWithBody, res: Response) => {
  if (req.session!.loggedIn) {
    res.send(`
<div>
  <p>You are logged In</p>
  <a href='/logout'>Logout</a>
</div>
`);
  } else {
    res.send(`
<div>
<p>You are not logged In</p>
<a href='/login'>Login</a>
</div>
`);
  }
});

// login route
router.get('/login', (req: Request, res: Response) => {
  res.send(`
<form method="post">
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" />
  </div>
  <br/>
  <div>
  <label for="password">Password</label>
  <input type="password" name="password" />
  </div>
  <br/>
  <button type="submit">Submit</button>
</form>
`);
});

// login post route to push login credentials
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'test@com' && password === '123') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

// logout route
router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

// protected routes
router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  res.send('Welcome to the protected route!!!');
});

export { router };
