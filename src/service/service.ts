export async function getApiCall(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (error) {
      console.log(error)
    }
  }