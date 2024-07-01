export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div className="">
            Sidebar
            {children}
          </div>
        </body>
      </html>
    );
  }
  