import pika, sys, os
from pi_calc import main as calc

def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='bunny🐰')
    channel.queue_declare(queue='bunny🐰nom')

    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body.decode())

        data = body.decode()

        result = calc(data.num)

        print("Result: ", result)
        

    channel.basic_consume(queue='bunny🐰', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)