import { Animal, User, TaskType, Task, AnimalType } from '@petcareorg/petcareadmin/data';

export const AnimalTypes: AnimalType[] = [
  {
    id:'1',
    name: 'Lions'
   },
   {
    id:'1',
    name: 'Penguins'
   }
];


export const TaskTypeList : TaskType[]= [
  {
    id:'1',
    name:'Clean Cage'
   },
   {
    id:'2',
    name:'Feed'
   },
   {
    id:'3',
    name:'Health exanimation'
   }
];

export const TaskList: Task[]=[
  {
    id:'1',
    taskTypeId: '2',
    amount: 1,
    description: 'Be careful!',
    name: 'Feed Lions',
    unit: 'kg Steak'
   },
   {
    id:'2',
    taskTypeId: '1',
    amount: 0,
    description: 'Be careful!',
    name: 'Clean Cage of Lions',
    unit: ''
   },
   {
    id:'3',
    taskTypeId: '3',
    amount: 0,
    description: 'Be careful!',
    name: 'Cut claws Lions',
    unit: ''
   },
   {
    id:'4',
    taskTypeId: '3',
    amount: 0,
    description: 'Be careful!',
    name: 'Wash Penguins',
    unit: ''
   },
   {
    id:'5',
    taskTypeId: '2',
    amount: 6,
    description: 'Look out, for greedy penguins',
    name: 'Feed Penguins',
    unit: 'fish'
   },
   {
    id:'6',
    taskTypeId: '1',
    amount: 0,
    description: 'It is a slippery slope ',
    name: 'Clean slope Penguins',
    unit: ''
   }
];
export const UserList: User[] = [
  {
    id: '1',
    email:'platon@phil.com',
    password: 'pw',
    firstname: 'Platon',
    lastname: 'none',
    role: "admin"
  },
  {
    id: '2',
    email:'immanuel@phil.com',
    password: 'pw',
    firstname: 'Immanuel',
    lastname: 'Kant',
    role: "user"
  },
  {
    id: '3',
    email:'sokrates@phil.com',
    password: 'pw',
    firstname: 'Sokrates',
    lastname: 'none',
    role: "user"
  },
  {
    id: '4',
    email:'aristoteles@phil.com',
    password: 'pw',
    firstname: 'Aristoteles',
    lastname: 'none',
    role: "user"
  }
];

export const Animals: Animal[] = [
  {
    id:'1',
    name: 'Simba',
    animalTypeId: '1',
    taskIds: [1, 2, 3],
    userIds: [2, 3],
    pictureUrl:'simba.jpg'
   },
   {
    id:'2',
    name: 'Scar',
    animalTypeId: '1',
    taskIds: [1, 2, 3],
    userIds: [2, 3],
    pictureUrl:'scar.jpg'
   },
   {
    id:'3',
    name: 'Nala',
    animalTypeId: '1',
    taskIds: [1, 2, 3],
    userIds: [2, 3],
    pictureUrl:'nala.jpg'
   },
   {
    id:'4',
    name: 'Mufasa',
    animalTypeId: '1',
    taskIds: [1, 2, 3],
    userIds: [2, 3],
    pictureUrl:'mufasa.jpg'
   },
   {
    id:'5',
    name: 'Skipper',
    animalTypeId: '2',
    taskIds: [4, 5, 6],
    userIds: [3, 4],
    pictureUrl:'skipper.jpg'
   },
   {
    id:'6',
    name: 'Kowalski',
    animalTypeId: '2',
    taskIds: [4, 5, 6],
    userIds: [3, 4],
    pictureUrl:'kowalski.jpg'
   },
   {
    id:'7',
    name: 'Private',
    animalTypeId: '2',
    taskIds: [4, 5, 6],
    userIds: [3, 4],
    pictureUrl:'private.jpg'
   },
   {
    id:'8',
    name: 'Tick',
    animalTypeId: '2',
    taskIds: [4, 5, 6],
    userIds: [3, 4],
    pictureUrl:'tick.jpg'
   },
   {
    id:'9',
    name: 'Trick',
    animalTypeId: '2',
    taskIds: [4, 5, 6],
    userIds: [3, 4],
    pictureUrl:'trick.jpg'
   },
   {
    id:'10',
    name: 'Track',
    animalTypeId: '2',
    taskIds: [4, 5, 6],
    userIds: [3, 4],
    pictureUrl:'track.jpg'
   },
];
