import { request } from '@playwright/test';
interface AuthResponse {
  token: string;
  // You can extend this with other data returned by the API
}
export class AuthHelper {
  // Method to authenticate and get a token
  static async authenticate(username: string, password: string): Promise<string> {
    const apiContext = await request.newContext();
    // Send a POST request to the login endpoint to get a token
    const response = await apiContext.post('https://your-api-url.com/auth/login', {
      data: {
        username,
        password,
      },
    });
    if (response.ok()) {
      const authData: AuthResponse = await response.json();
      return authData.token; // Return the token for further use
    } else {
      throw new Error(`Authentication failed with status: ${response.status()}`);
    }
  }
  // Method to use an existing token or session
  static async getAuthenticatedContext(token: string) {
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`, // Use the token for authenticated requests
      },
    });
    return apiContext;
  }
}
 