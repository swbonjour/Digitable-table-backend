import { KafkaConsumerEnum } from 'src/enums/kafka.enum';
import { BROKERS_HOST } from 'src/tools/enviroment';

export const getKafkaClientOptions = (groupId: KafkaConsumerEnum) => ({
  client: {
    brokers: [BROKERS_HOST],
  },
  consumer: {
    groupId,
  },
});
