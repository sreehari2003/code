package main

func main() {
	concat[string]("hi", "hello")
}

func concat[T string | int | float64](a, b T) T {
	return a + b
}
