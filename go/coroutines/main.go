package main

import (
	"fmt"
	"net/http"
	"sync"
)

var data = []string{}
var wg sync.WaitGroup // pointer
var mut sync.Mutex    // pointer

func main() {
	webites := []string{
		"https://lco.dev",
		"https://go.dev",
		"https://google.com",
		"https://fb.com",
	}
	for _, web := range webites {
		go getStatusCode(web)
		wg.Add(1)
	}

	wg.Wait()
	fmt.Println(data)
	// go greeter("Hello")
	// greeter("World")
}

// func greeter(s string) {
// 	for i := 0; i < 6; i++ {
// 		time.Sleep(3 * time.Millisecond)
// 		fmt.Println(s)
// 	}
// }

func getStatusCode(route string) {
	defer wg.Done()
	res, err := http.Get(route)

	if err != nil {
		fmt.Println("Error calling api")
		return
	}
	mut.Lock()
	data = append(data, route)
	mut.Unlock()

	fmt.Println("Request success", res.StatusCode, route)
}
