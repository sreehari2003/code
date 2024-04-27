package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handleLogin)

	go func() {
		if err := http.ListenAndServe(":8080", nil); err != nil {
			panic("Error creating server")
		}
	}()

	fmt.Print("Connected to port 8080")
	select {}
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello\n")
}
