package main

import (
	"fmt"
	"sync"
)

func main() {
	fmt.Println("Race condition")
	var score = []int{0}
	wg := &sync.WaitGroup{}
	mut := &sync.Mutex{}

	wg.Add(3)
	go func(wg *sync.WaitGroup, mutex *sync.Mutex) {
		fmt.Println("One routines")
		mutex.Lock()
		score = append(score, 1)
		mutex.Unlock()
		defer wg.Done()
	}(wg, mut)

	go func(wg *sync.WaitGroup, mutex *sync.Mutex) {
		fmt.Println("Two routines")
		mutex.Lock()
		score = append(score, 2)
		mutex.Unlock()
		defer wg.Done()
	}(wg, mut)
	go func(wg *sync.WaitGroup, mutex *sync.Mutex) {
		fmt.Println("Three routines")
		mutex.Lock()
		score = append(score, 3)
		mutex.Unlock()
		defer wg.Done()
	}(wg, mut)

	wg.Wait()
	fmt.Println(score)
}

// deadlock condition  ,
// OS mutex locking and conditions
