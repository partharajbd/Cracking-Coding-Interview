<?php

$primes = [];

function sieve(){
    global $primes;

    for ($i = 0; $i <= 100; $i++) {
        $primes[$i] = 1;
    }

    for ($i = 2; $i <= 100; $i++) {
        if ($primes[$i] != 1) {
            continue;
        }

        for ($j = $i + $i; $j <= 100; $j = $j + $i) {
            $primes[$j] = 0;
        }
    }
}

sieve();

//print_r($primes);


$a = 5; // 0101
$b = 7; // 0111
$c = $a ^ $b; // 1101

$a = $a << 1;

echo $a;