import {
  ref,
  watch,
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  extend,
  padZero,
  createNamespace,
  makeNumericProp,
  isSameValue,
} from '../utils';
import { times, sharedProps, pickerInheritKeys } from '../date-picker/utils';

// Components
import { Picker } from '../picker';

const [name] = createNamespace('time-picker');

export type TimePickerColumnType = 'hour' | 'minute';

const timePickerProps = extend({}, sharedProps, {
  minHour: makeNumericProp(0),
  maxHour: makeNumericProp(23),
  minMinute: makeNumericProp(0),
  maxMinute: makeNumericProp(59),
  columnsType: {
    type: Array as PropType<TimePickerColumnType[]>,
    default: () => ['hour', 'minute'],
  },
});

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;

export default defineComponent({
  name,

  props: timePickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const currentValues = ref<string[]>(props.modelValue);

    const genOptions = (
      min: number,
      max: number,
      type: TimePickerColumnType
    ) => {
      const options = times(max - min + 1, (index) => {
        const value = padZero(min + index);
        return props.formatter(type, {
          text: value,
          value,
        });
      });
      return props.filter ? props.filter(type, options) : options;
    };

    const columns = computed(() =>
      props.columnsType.map((type) => {
        switch (type) {
          case 'hour':
            return genOptions(+props.minHour, +props.maxHour, 'hour');
          case 'minute':
            return genOptions(+props.minMinute, +props.maxMinute, 'minute');
          default:
            throw new Error(
              `[Vant] DatePicker: unsupported columns type: ${type}`
            );
        }
      })
    );

    watch(
      currentValues,
      (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit('update:modelValue', newValues);
        }
      },
      { immediate: true }
    );

    watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
      }
    );

    const onChange = (...args: unknown[]) => emit('change', ...args);
    const onCancel = (...args: unknown[]) => emit('cancel', ...args);
    const onConfirm = (...args: unknown[]) => emit('confirm', ...args);

    return () => (
      <Picker
        v-model={currentValues.value}
        v-slots={slots}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, pickerInheritKeys)}
      />
    );
  },
});