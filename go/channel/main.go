package main

import (
	"fmt"
	"sync"
)

func main() {
	fmt.Println("Channels")
	ch := make(chan int)
	wg := &sync.WaitGroup{}

	wg.Add(2)
	go func(ch chan int, wait *sync.WaitGroup) {
		fmt.Println(<-ch, "My channel")
		defer wait.Done()
	}(ch, wg)

	go func(ch chan int, wait *sync.WaitGroup) {
		ch <- 5
		ch <- 6
		// closing the channel
		close(ch)
		defer wait.Done()
	}(ch, wg)

	wg.Wait()

}
