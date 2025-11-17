# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 4
My Partner's Key: 1

Our initial shared key: 5

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| KNWXY           | FIRST           | 5   |
| GSPPICI         | COLLEGE         | 22  |
| AJPMOCC         | FOURTH          | 21  |
| NWCZBP          | FOURTH          | 18  |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
m261Iii
Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

1st position is the first 6 character
2nd position is the equivalent decimal value
3rd position is the equivalent  8-bit binary

m=109=01101101
2=50=00110010
6=54=00110110
1=49=00110001
I=108=01101100
i=105=01101001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [prithvi]
    Destination: [senai]  
    Sequence: 1/3
    Data: [1] [0]
    =========
    Packet 2:

    Source: [prithvi
    Destination: [senai]
    Sequence: 2/3 
    Data: [1] [1]
    =========
    Packet 3:

    Source: [prithvi]
    Destination: [senai]
    Sequence: 3/3
    Data: [0] [1]
    =========

## Part 4: Reflection Questions



**2/6 for these quesitons double check to make sure**


- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

symmetric encryption uses a single, shared key for both encryption and decryption, while asymmetric uses public key for encryption and a private key for decyrption

- Why is it important that this protocol uses a new key for each message?

i dont know, basically more security

- Why is it important that you never share your secret key?

sharing your secret key bascially ruins the security of communication

- In the transport layer, do these messages use TCP or UDP? Why?

tcp, but i dont know why

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.

i dont know

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?


i dont know
