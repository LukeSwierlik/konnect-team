import { expect } from 'chai'
import { API } from '@/shared/resources/services.resources'
import { MutationTypes } from './services.mutations'
import {servicesState} from "@/store/Services/services.state";

const actionsInjector = require('inject-loader!./services.actions');
const servicesInjector = require('inject-loader!./services.service');
const mutationsInjector = require('inject-loader!./services.mutations');

// create the module with our mocks
const actions = actionsInjector({
  [API.servicesPackages()]: {
    'fetchServices' (cb) {
      setTimeout(() => {
        cb([{
          id: 'bdfb82d0-f082-40c6-bcfb-f0ab704969a5',
          name: 'Handmade Granite Bacon',
          description: 'We need to connect the digital SMS matrix!Assimilated radical policy',
          versions: [
            {
              id: '5bc8b151-c4d9-4c4e-91d4-b230a54a2c22',
              name: 'Electronics',
              description: 'violet archive'
            }
          ]
        },
          {
            id: '148c8f84-94bc-4129-accf-25bfe0324ca9',
            name: 'Handmade Concrete Cheese',
            description: 'Try to reboot the ADP hard drive, maybe it will quantify the redundant microchip!Synergistic 5th generation moratorium',
            versions: [
              {
                id: 'd61e358e-a88c-461f-b989-3b8257f98754',
                name: 'Tools',
                description: 'connecting SQL'
              }
            ]
          }])
      }, 100)
    }
  },
})

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(type).to.equal(mutation.type)
      expect(payload).to.deep.equal(mutation.payload)
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions', () => {
  it('fetchServicesActions', done => {
    testAction(actions.fetchServicesActions, null, servicesState, [
      { type: MutationTypes.LOADED_SERVICES },
      {
        type: MutationTypes.LOADED_SERVICES_SUCCESS,
        payload: [{
          id: 'bdfb82d0-f082-40c6-bcfb-f0ab704969a5',
          name: 'Handmade Granite Bacon',
          description: 'We need to connect the digital SMS matrix!Assimilated radical policy',
          versions: [
            {
              id: '5bc8b151-c4d9-4c4e-91d4-b230a54a2c22',
              name: 'Electronics',
              description: 'violet archive'
            }
          ]
        },
          {
            id: '148c8f84-94bc-4129-accf-25bfe0324ca9',
            name: 'Handmade Concrete Cheese',
            description: 'Try to reboot the ADP hard drive, maybe it will quantify the redundant microchip!Synergistic 5th generation moratorium',
            versions: [
              {
                id: 'd61e358e-a88c-461f-b989-3b8257f98754',
                name: 'Tools',
                description: 'connecting SQL'
              }
            ]
          }]
      }
    ], done)
  })
})
