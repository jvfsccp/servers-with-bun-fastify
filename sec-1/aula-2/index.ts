class HelloWorld {
  constructor(private greeting: string) {}
  greet() {
    console.log(this.greeting)
  }
}

const gretter = new HelloWorld(process.env.GREETING || "Olá")
gretter.greet()
