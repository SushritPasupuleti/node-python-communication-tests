import sys

def calcPi(limit):  # Generator function
    """
    Prints out the digits of PI
    until it reaches the given limit
    """

    q, r, t, k, n, l = 1, 0, 1, 1, 3, 3

    decimal = limit
    counter = 0

    while counter != decimal + 1:
        if 4 * q + r - t < n * t:
            # yield digit
            yield str(n)
            # insert period after first digit
            if counter == 0:
                yield '.'
            # end
            if decimal == counter:
                # print('')
                break
            counter += 1
            nr = 10 * (r - n * t)
            n = ((10 * (3 * q + r)) // t) - 10 * n
            q *= 10
            r = nr
        else:
            nr = (2 * q + r) * l
            nn = (q * (7 * k) + 2 + (r * l)) // (t * l)
            q *= k
            t *= l
            l += 2
            k += 1
            n = nn
            r = nr


def main(num: int):  # Wrapper function

    # Calls CalcPi with the given limit
    # print("Running Pi Calculations")
    pi_digits = calcPi(num)

    i = 0

    # Prints the output of calcPi generator function
    # Inserts a newline after every 40th number
    # for d in pi_digits:
    #     print(d, end='')
    #     i += 1
    #     if i == 40:
    #         print("")
    #         i = 0

    # convert to string
    # output = pi_digits
    output = ''.join(pi_digits)

    print("OP: " + output)
    return output


if __name__ == "__main__":
    results = main(sys.argv[1])
    print(results)
    sys.stdout.flush()
