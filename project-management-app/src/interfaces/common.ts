export interface Theme {
  fontFamily: {
    primary: string;
  };

  colors: {
    bg: string;
    font: string;
    button: {
      primary: {
        bg: string;
        font: string;
      };

      success: {
        bg: string;
        font: string;
      };

      warning: {
        bg: string;
        font: string;
      };
    };
  };
}

export interface ServerError {
  statusCode: number;
  message: string;
}
