package main

import (
	"fmt"
	"os/user"
)

// go code to user name
func main() {
	u, e := user.Current()
	if e != nil {
		return
	}
	fmt.Println(u.Username)
}
