interface IErrorPage {
  code?: number;
  message: string;
}
export const ErrorPage = ({ code, message }: IErrorPage) => {
  return (
    <div>
      {code && <div>{code}</div>}
      <div>{message}</div>
    </div>
  );
};
